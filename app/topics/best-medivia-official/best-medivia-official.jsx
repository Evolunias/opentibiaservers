import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-official');
}

export default function BestMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-official" />;
}
