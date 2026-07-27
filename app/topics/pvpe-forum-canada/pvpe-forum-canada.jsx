import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-canada');
}

export default function PvpeForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-canada" />;
}
