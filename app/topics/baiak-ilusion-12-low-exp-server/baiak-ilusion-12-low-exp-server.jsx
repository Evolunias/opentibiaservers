import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-low-exp-server');
}

export default function BaiakIlusion12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-low-exp-server" />;
}
