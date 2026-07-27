import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-official');
}

export default function HighrateOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-official" />;
}
