import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-wiki');
}

export default function BlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="blazera-wiki" />;
}
