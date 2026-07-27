import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-forum');
}

export default function HighrateMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-forum" />;
}
