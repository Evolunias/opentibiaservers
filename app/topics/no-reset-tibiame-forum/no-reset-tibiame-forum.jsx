import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-forum');
}

export default function NoResetTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-forum" />;
}
