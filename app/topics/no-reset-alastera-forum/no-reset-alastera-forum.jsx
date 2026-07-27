import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-forum');
}

export default function NoResetAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-forum" />;
}
