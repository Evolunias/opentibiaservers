import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-forum');
}

export default function TopMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-forum" />;
}
