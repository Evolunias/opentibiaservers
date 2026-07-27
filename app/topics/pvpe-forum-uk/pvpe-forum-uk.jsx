import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-uk');
}

export default function PvpeForumUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-uk" />;
}
