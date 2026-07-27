import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-events');
}

export default function BaiakIlusionEventsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-events" />;
}
