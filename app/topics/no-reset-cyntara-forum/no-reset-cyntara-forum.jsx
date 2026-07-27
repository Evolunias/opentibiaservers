import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-forum');
}

export default function NoResetCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-forum" />;
}
