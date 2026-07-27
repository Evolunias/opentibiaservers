import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-wiki');
}

export default function VenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="venoreot-wiki" />;
}
