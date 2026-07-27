import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-forum');
}

export default function NoResetNilotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-forum" />;
}
