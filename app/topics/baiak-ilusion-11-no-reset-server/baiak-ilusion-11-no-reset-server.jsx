import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-no-reset-server');
}

export default function BaiakIlusion11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-no-reset-server" />;
}
