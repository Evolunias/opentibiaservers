import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-forum');
}

export default function MiracleForumKeywordPage() {
  return <StaticKeywordPage slug="miracle-forum" />;
}
