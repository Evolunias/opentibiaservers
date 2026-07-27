import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape');
}

export default function PopularTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape" />;
}
