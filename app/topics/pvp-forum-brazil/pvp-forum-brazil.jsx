import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-brazil');
}

export default function PvpForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-brazil" />;
}
