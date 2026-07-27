import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-forum');
}

export default function ActiveYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-forum" />;
}
