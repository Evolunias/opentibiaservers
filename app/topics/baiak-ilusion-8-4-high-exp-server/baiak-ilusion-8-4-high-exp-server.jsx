import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-high-exp-server');
}

export default function BaiakIlusion84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-high-exp-server" />;
}
