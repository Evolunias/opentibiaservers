import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-wiki');
}

export default function NewDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-wiki" />;
}
