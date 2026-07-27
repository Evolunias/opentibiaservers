import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-official');
}

export default function CustomMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-official" />;
}
