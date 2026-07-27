import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-official');
}

export default function FreshStartMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-official" />;
}
