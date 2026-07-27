import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-forum');
}

export default function OfficialOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-forum" />;
}
