import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-server');
}

export default function LowrateAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-server" />;
}
