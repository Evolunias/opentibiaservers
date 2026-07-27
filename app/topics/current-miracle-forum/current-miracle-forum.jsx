import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-forum');
}

export default function CurrentMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-forum" />;
}
