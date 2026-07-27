import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-forum');
}

export default function CurrentOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-forum" />;
}
