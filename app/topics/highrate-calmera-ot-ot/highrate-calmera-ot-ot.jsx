import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-ot');
}

export default function HighrateCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-ot" />;
}
