import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-forum');
}

export default function HighrateRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-forum" />;
}
