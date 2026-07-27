import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-forum');
}

export default function NoResetMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-forum" />;
}
