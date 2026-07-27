import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-wiki');
}

export default function PopularNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-wiki" />;
}
