import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-wiki');
}

export default function CurrentNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-wiki" />;
}
