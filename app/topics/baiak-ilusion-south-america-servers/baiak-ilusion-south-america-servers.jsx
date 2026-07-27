import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-south-america-servers');
}

export default function BaiakIlusionSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-south-america-servers" />;
}
