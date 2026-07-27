import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-forum');
}

export default function NoResetRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-forum" />;
}
