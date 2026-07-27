import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-europe');
}

export default function PvpForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-europe" />;
}
