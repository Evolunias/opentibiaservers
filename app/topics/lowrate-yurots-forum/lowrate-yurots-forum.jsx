import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-forum');
}

export default function LowrateYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-forum" />;
}
