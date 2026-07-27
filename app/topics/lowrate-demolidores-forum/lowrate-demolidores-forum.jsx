import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-forum');
}

export default function LowrateDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-forum" />;
}
