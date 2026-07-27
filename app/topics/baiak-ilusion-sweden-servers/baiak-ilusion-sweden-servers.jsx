import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-sweden-servers');
}

export default function BaiakIlusionSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-sweden-servers" />;
}
