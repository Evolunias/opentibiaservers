import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-forum');
}

export default function NoResetBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-forum" />;
}
