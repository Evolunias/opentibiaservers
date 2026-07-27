import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-wiki');
}

export default function CurrentNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-wiki" />;
}
