import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-forum');
}

export default function NoResetThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-forum" />;
}
