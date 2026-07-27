import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-official');
}

export default function PopularMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-official" />;
}
