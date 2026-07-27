import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-wiki');
}

export default function NewDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-wiki" />;
}
