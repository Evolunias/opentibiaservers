import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-wiki');
}

export default function NewNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-wiki" />;
}
