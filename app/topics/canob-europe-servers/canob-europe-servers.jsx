import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-europe-servers');
}

export default function CanobEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="canob-europe-servers" />;
}
