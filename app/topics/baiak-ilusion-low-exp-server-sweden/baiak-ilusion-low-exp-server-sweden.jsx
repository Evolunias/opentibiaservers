import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-low-exp-server-sweden');
}

export default function BaiakIlusionLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-low-exp-server-sweden" />;
}
