import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-usa-servers');
}

export default function BaiakIlusionUsaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-usa-servers" />;
}
