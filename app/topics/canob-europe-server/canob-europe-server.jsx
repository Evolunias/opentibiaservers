import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-europe-server');
}

export default function CanobEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="canob-europe-server" />;
}
