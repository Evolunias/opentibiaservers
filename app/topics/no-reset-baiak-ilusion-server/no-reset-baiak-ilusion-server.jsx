import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-server');
}

export default function NoResetBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-server" />;
}
