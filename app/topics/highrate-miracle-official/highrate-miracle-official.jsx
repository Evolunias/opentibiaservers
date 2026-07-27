import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-official');
}

export default function HighrateMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-official" />;
}
