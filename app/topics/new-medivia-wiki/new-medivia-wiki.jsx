import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-wiki');
}

export default function NewMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-wiki" />;
}
