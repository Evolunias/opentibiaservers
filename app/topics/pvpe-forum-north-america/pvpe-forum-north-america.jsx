import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-north-america');
}

export default function PvpeForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-north-america" />;
}
