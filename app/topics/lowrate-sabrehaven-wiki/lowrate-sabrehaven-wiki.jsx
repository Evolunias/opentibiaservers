import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-wiki');
}

export default function LowrateSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-wiki" />;
}
