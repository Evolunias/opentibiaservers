import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-official');
}

export default function OfficialMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-official" />;
}
