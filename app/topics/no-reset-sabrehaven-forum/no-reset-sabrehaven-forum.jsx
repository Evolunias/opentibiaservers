import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-forum');
}

export default function NoResetSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-forum" />;
}
