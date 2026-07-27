import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-official');
}

export default function PopularAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-official" />;
}
