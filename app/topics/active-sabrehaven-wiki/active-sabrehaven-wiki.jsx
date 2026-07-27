import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-wiki');
}

export default function ActiveSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-wiki" />;
}
