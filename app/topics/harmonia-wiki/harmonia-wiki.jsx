import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-wiki');
}

export default function HarmoniaWikiKeywordPage() {
  return <StaticKeywordPage slug="harmonia-wiki" />;
}
