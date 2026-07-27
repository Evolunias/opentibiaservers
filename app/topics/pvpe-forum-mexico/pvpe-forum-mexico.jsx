import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-mexico');
}

export default function PvpeForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-mexico" />;
}
