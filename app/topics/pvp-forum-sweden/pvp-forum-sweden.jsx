import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-sweden');
}

export default function PvpForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-sweden" />;
}
