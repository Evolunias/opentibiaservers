import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-forum');
}

export default function HighrateZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-forum" />;
}
