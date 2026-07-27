import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-wiki');
}

export default function NewNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-wiki" />;
}
