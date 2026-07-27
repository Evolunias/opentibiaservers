import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-forum');
}

export default function NoResetImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-forum" />;
}
