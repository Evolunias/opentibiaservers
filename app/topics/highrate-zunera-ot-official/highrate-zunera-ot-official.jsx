import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-official');
}

export default function HighrateZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-official" />;
}
