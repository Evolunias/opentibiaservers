import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-north-america-server');
}

export default function BaiakIlusionNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-north-america-server" />;
}
