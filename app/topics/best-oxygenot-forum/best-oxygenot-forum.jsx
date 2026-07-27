import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-forum');
}

export default function BestOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-forum" />;
}
