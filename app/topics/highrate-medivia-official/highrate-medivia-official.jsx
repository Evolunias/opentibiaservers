import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-official');
}

export default function HighrateMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-official" />;
}
