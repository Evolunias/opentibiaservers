import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-no-reset-server');
}

export default function BaiakIlusion15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-no-reset-server" />;
}
