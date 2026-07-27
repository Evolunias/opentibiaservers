import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-forum');
}

export default function NoResetZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-forum" />;
}
