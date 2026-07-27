import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-wiki');
}

export default function CurrentHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-wiki" />;
}
