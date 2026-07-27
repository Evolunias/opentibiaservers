import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-wiki');
}

export default function CustomThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-wiki" />;
}
