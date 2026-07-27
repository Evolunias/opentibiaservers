import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-wiki');
}

export default function PopularNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-wiki" />;
}
