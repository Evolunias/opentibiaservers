import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-forum');
}

export default function NoResetYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-forum" />;
}
