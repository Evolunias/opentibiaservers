import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-forum');
}

export default function FreshStartOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-forum" />;
}
