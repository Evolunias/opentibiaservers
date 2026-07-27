import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-official');
}

export default function TopMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-official" />;
}
