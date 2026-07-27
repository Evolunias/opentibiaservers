import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-wiki');
}

export default function TopNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-wiki" />;
}
