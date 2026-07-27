import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-wiki');
}

export default function MediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="medivia-wiki" />;
}
