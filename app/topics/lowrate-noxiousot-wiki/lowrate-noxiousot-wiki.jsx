import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-wiki');
}

export default function LowrateNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-wiki" />;
}
