import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-forum');
}

export default function NoResetCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-forum" />;
}
