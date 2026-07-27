import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-forum-france');
}

export default function PvpeForumFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-forum-france" />;
}
