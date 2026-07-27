import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-wiki');
}

export default function DemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="demolidores-wiki" />;
}
