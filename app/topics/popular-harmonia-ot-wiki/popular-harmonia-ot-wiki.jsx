import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-wiki');
}

export default function PopularHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-wiki" />;
}
