import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-low-exp-server');
}

export default function BaiakIlusion11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-low-exp-server" />;
}
