import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-wiki');
}

export default function ActiveOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-wiki" />;
}
