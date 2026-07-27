import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-no-reset-server');
}

export default function BaiakIlusion86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-no-reset-server" />;
}
