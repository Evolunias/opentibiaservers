import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-forum');
}

export default function HighrateTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-forum" />;
}
