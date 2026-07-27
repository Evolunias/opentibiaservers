import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-wiki');
}

export default function FreshStartNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-wiki" />;
}
