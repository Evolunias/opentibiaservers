import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-ot');
}

export default function HighrateKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-ot" />;
}
