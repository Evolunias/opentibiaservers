import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-wiki');
}

export default function OfficialDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-wiki" />;
}
