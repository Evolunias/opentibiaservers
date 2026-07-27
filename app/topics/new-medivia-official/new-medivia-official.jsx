import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-official');
}

export default function NewMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-official" />;
}
