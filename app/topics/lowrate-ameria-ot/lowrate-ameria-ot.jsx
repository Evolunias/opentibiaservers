import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-ot');
}

export default function LowrateAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-ot" />;
}
