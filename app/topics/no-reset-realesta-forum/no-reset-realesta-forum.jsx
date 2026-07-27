import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-forum');
}

export default function NoResetRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-forum" />;
}
