import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-germany-servers');
}

export default function BaiakIlusionGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-germany-servers" />;
}
