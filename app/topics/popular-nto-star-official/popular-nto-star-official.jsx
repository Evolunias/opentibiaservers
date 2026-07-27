import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-official');
}

export default function PopularNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-official" />;
}
