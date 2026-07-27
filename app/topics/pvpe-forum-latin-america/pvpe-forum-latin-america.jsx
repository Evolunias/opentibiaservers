import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-latin-america');
}

export default function PvpeForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-latin-america" />;
}
