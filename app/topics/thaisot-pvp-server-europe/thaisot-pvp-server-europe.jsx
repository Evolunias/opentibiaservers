import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-europe');
}

export default function ThaisotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-europe" />;
}
