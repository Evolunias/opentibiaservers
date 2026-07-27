import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-official');
}

export default function PopularKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-official" />;
}
