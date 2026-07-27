import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-forum');
}

export default function CurrentThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-forum" />;
}
