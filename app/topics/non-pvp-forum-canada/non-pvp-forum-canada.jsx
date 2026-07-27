import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-forum-canada');
}

export default function NonPvpForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-forum-canada" />;
}
