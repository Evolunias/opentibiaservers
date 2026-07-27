import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-ot');
}

export default function HighrateAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-ot" />;
}
