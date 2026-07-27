import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot');
}

export default function HighrateZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot" />;
}
