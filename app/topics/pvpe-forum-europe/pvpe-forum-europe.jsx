import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-europe');
}

export default function PvpeForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-europe" />;
}
