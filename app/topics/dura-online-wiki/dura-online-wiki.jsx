import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-wiki');
}

export default function DuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="dura-online-wiki" />;
}
