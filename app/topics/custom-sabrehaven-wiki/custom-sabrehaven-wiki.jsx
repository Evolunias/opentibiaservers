import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-wiki');
}

export default function CustomSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-wiki" />;
}
