import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-south-america');
}

export default function PvpForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-south-america" />;
}
