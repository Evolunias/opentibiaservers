import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-south-america');
}

export default function PvpeForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-south-america" />;
}
