import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-wiki');
}

export default function BestNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-wiki" />;
}
