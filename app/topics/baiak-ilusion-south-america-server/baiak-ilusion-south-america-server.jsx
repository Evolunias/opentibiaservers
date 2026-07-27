import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-south-america-server');
}

export default function BaiakIlusionSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-south-america-server" />;
}
