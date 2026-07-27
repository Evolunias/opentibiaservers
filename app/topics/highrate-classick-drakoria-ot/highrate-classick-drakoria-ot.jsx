import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-ot');
}

export default function HighrateClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-ot" />;
}
