import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-website');
}

export default function PopularTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-website" />;
}
