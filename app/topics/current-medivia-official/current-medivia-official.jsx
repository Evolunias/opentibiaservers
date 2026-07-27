import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-official');
}

export default function CurrentMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-official" />;
}
