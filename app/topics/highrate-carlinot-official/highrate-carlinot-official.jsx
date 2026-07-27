import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-official');
}

export default function HighrateCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-official" />;
}
