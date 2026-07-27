import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-france');
}

export default function NonPvpForumFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-france" />;
}
