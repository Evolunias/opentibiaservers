import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-wiki');
}

export default function ActiveThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-wiki" />;
}
