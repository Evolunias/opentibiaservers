import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-official');
}

export default function ActiveMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-official" />;
}
