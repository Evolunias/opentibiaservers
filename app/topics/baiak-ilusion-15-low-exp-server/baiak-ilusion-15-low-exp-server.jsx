import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-low-exp-server');
}

export default function BaiakIlusion15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-low-exp-server" />;
}
