import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-wiki');
}

export default function BestHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-wiki" />;
}
