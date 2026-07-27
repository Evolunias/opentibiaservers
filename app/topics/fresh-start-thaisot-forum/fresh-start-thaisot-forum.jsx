import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-forum');
}

export default function FreshStartThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-forum" />;
}
