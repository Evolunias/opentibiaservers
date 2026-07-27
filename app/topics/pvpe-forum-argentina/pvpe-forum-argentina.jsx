import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-argentina');
}

export default function PvpeForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-argentina" />;
}
