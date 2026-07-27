import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-europe');
}

export default function ThaisotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-europe" />;
}
