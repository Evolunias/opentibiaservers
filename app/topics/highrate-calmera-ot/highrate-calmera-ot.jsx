import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot');
}

export default function HighrateCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot" />;
}
