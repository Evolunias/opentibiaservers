import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-usa-server');
}

export default function BaiakIlusionUsaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-usa-server" />;
}
