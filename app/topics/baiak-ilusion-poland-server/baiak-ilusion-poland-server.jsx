import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-poland-server');
}

export default function BaiakIlusionPolandServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-poland-server" />;
}
