import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-server-europe');
}

export default function CanobPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-server-europe" />;
}
