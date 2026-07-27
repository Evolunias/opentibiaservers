import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-forum');
}

export default function OfficialMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-forum" />;
}
