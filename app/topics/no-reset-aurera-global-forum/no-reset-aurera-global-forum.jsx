import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-forum');
}

export default function NoResetAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-forum" />;
}
