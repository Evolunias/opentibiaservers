import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-wiki');
}

export default function TopNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-wiki" />;
}
