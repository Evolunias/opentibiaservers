import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-canada');
}

export default function PvpForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-canada" />;
}
