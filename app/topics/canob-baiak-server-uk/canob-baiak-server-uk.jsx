import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-uk');
}

export default function CanobBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-uk" />;
}
