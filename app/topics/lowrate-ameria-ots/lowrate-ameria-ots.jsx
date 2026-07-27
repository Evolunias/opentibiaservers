import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-ots');
}

export default function LowrateAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-ots" />;
}
