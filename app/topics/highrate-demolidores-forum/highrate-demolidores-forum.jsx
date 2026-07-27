import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-forum');
}

export default function HighrateDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-forum" />;
}
