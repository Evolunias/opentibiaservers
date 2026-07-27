import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-forum');
}

export default function NoResetRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-forum" />;
}
