import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-germany');
}

export default function PvpForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-germany" />;
}
