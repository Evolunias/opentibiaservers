import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-usa');
}

export default function PvpForumUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-usa" />;
}
