import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-forum');
}

export default function NonPvpOtServerForumKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-forum" />;
}
