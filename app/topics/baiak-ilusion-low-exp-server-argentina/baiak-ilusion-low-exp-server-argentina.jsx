import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-low-exp-server-argentina');
}

export default function BaiakIlusionLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-low-exp-server-argentina" />;
}
