import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-wiki');
}

export default function TopHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-wiki" />;
}
