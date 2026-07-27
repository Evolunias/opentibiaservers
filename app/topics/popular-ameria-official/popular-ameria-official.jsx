import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-official');
}

export default function PopularAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-official" />;
}
