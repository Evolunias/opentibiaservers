import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-forum');
}

export default function LowrateMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-forum" />;
}
