import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-wiki');
}

export default function FreshStartHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-wiki" />;
}
