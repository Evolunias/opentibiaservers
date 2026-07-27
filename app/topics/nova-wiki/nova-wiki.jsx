import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-wiki');
}

export default function NovaWikiKeywordPage() {
  return <StaticKeywordPage slug="nova-wiki" />;
}
