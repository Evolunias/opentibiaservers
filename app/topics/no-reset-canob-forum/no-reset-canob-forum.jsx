import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-forum');
}

export default function NoResetCanobForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-forum" />;
}
