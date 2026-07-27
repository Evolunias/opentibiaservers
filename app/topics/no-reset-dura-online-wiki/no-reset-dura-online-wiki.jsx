import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-wiki');
}

export default function NoResetDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-wiki" />;
}
