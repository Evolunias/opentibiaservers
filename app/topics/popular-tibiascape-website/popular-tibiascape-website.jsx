import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-website');
}

export default function PopularTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-website" />;
}
