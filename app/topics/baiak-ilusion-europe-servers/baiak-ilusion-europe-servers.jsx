import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-europe-servers');
}

export default function BaiakIlusionEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-europe-servers" />;
}
