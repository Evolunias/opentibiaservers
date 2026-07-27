import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-uk');
}

export default function ThaisotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-uk" />;
}
