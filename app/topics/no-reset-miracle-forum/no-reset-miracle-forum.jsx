import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-forum');
}

export default function NoResetMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-forum" />;
}
