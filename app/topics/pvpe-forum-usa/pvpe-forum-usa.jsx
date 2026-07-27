import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-usa');
}

export default function PvpeForumUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-usa" />;
}
