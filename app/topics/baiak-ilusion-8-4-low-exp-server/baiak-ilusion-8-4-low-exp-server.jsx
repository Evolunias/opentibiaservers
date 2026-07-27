import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-low-exp-server');
}

export default function BaiakIlusion84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-low-exp-server" />;
}
