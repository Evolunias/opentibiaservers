import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-official');
}

export default function HighrateThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-official" />;
}
