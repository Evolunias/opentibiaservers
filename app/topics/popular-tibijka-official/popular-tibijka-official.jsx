import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-official');
}

export default function PopularTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-official" />;
}
