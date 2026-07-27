import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-wiki');
}

export default function LowrateHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-wiki" />;
}
