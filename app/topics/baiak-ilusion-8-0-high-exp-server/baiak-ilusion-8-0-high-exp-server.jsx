import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-0-high-exp-server');
}

export default function BaiakIlusion80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-0-high-exp-server" />;
}
