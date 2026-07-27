import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-forum');
}

export default function CustomMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-forum" />;
}
