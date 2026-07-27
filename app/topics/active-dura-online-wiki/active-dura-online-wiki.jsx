import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-wiki');
}

export default function ActiveDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-wiki" />;
}
