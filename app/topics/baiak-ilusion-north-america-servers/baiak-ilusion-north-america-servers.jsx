import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-north-america-servers');
}

export default function BaiakIlusionNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-north-america-servers" />;
}
