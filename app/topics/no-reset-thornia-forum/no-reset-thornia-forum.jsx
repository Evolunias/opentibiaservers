import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-forum');
}

export default function NoResetThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-forum" />;
}
