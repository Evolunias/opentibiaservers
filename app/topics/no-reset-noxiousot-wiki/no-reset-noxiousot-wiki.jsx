import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-wiki');
}

export default function NoResetNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-wiki" />;
}
