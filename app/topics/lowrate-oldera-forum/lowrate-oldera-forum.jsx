import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-forum');
}

export default function LowrateOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-forum" />;
}
