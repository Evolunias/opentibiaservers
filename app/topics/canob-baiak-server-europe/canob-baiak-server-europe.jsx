import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-europe');
}

export default function CanobBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-europe" />;
}
