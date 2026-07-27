import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-wiki');
}

export default function ActiveMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-wiki" />;
}
