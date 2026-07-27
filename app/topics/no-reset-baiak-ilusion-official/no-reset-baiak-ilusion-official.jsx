import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-official');
}

export default function NoResetBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-official" />;
}
