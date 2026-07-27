import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-high-exp-server');
}

export default function BaiakIlusion15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-high-exp-server" />;
}
