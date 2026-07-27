import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-wiki');
}

export default function FreshStartNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-wiki" />;
}
