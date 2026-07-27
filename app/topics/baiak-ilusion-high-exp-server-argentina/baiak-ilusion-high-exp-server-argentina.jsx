import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-high-exp-server-argentina');
}

export default function BaiakIlusionHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-high-exp-server-argentina" />;
}
