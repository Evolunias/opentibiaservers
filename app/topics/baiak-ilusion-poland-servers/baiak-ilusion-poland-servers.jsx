import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-poland-servers');
}

export default function BaiakIlusionPolandServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-poland-servers" />;
}
