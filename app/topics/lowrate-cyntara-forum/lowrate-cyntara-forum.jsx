import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-forum');
}

export default function LowrateCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-forum" />;
}
