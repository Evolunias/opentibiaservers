import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-login');
}

export default function LowrateAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-login" />;
}
