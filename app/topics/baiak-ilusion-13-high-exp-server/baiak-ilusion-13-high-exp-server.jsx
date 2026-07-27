import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-high-exp-server');
}

export default function BaiakIlusion13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-high-exp-server" />;
}
