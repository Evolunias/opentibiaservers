import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-wiki');
}

export default function HarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-wiki" />;
}
