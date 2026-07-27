import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-forum');
}

export default function NoResetOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-forum" />;
}
