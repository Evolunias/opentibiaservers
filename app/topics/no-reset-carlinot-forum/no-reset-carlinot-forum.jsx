import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-forum');
}

export default function NoResetCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-forum" />;
}
