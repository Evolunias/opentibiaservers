import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-forum');
}

export default function ActiveMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-forum" />;
}
