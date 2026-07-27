import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-baiak-ilusion-server');
}

export default function HighExpBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-baiak-ilusion-server" />;
}
