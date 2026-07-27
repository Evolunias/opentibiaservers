import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-client');
}

export default function LowrateAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-client" />;
}
