import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-forum');
}

export default function NoResetSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-forum" />;
}
