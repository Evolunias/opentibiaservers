import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-wiki');
}

export default function OfficialNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-wiki" />;
}
