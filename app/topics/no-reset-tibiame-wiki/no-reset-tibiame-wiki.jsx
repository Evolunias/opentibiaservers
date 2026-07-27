import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-wiki');
}

export default function NoResetTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-wiki" />;
}
