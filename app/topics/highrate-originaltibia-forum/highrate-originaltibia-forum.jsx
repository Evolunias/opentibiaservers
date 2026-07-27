import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-forum');
}

export default function HighrateOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-forum" />;
}
