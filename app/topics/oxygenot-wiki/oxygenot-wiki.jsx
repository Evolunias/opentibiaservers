import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-wiki');
}

export default function OxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-wiki" />;
}
