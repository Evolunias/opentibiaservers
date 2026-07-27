import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-wiki');
}

export default function CustomMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-wiki" />;
}
