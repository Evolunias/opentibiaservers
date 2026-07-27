import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-poland');
}

export default function PvpeForumPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-poland" />;
}
