import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-forum-france');
}

export default function PvpForumFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-forum-france" />;
}
