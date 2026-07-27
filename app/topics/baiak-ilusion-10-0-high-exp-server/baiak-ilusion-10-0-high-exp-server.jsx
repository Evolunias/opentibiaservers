import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-high-exp-server');
}

export default function BaiakIlusion100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-high-exp-server" />;
}
