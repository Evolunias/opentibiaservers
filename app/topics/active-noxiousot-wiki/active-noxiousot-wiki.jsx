import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-wiki');
}

export default function ActiveNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-wiki" />;
}
