import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-wiki');
}

export default function CustomNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-wiki" />;
}
