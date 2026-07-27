import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-uk');
}

export default function PvpForumUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-uk" />;
}
