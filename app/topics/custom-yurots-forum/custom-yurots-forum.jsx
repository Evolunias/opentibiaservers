import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-forum');
}

export default function CustomYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-forum" />;
}
