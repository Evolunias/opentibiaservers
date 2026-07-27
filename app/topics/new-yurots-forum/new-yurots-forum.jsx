import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-forum');
}

export default function NewYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-forum" />;
}
