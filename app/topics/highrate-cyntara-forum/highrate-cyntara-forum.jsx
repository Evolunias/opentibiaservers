import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-forum');
}

export default function HighrateCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-forum" />;
}
