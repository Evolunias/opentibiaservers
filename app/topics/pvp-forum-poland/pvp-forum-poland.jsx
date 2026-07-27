import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-poland');
}

export default function PvpForumPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-poland" />;
}
