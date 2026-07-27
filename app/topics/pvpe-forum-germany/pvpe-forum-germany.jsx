import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-germany');
}

export default function PvpeForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-germany" />;
}
