import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-low-exp-server');
}

export default function BaiakIlusion13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-low-exp-server" />;
}
