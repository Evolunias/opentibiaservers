import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-official');
}

export default function HighrateCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-official" />;
}
