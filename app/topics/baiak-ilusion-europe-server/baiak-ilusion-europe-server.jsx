import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-europe-server');
}

export default function BaiakIlusionEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-europe-server" />;
}
