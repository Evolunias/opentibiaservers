import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-wiki');
}

export default function NewSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-wiki" />;
}
