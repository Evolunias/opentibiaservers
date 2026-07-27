import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-brazil');
}

export default function PvpeForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-brazil" />;
}
