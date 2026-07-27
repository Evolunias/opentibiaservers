import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-no-reset-server');
}

export default function BaiakIlusion12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-no-reset-server" />;
}
