import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-uk');
}

export default function ThaisotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-uk" />;
}
