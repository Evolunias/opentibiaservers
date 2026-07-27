import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-wiki');
}

export default function NewSeasonDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-wiki" />;
}
