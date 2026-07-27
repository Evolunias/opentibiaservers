import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-forum');
}

export default function NoResetTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-forum" />;
}
