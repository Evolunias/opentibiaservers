import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-wiki');
}

export default function NoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-wiki" />;
}
