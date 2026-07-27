import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-forum');
}

export default function NoResetTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-forum" />;
}
