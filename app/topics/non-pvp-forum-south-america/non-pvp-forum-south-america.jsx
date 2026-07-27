import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-south-america');
}

export default function NonPvpForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-south-america" />;
}
