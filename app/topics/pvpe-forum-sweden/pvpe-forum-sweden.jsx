import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-sweden');
}

export default function PvpeForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-sweden" />;
}
