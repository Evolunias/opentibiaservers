import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-canada-servers');
}

export default function BaiakIlusionCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-canada-servers" />;
}
