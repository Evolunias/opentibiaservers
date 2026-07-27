import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-no-reset-server');
}

export default function BaiakIlusion80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-no-reset-server" />;
}
