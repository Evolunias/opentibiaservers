import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-poland');
}

export default function ThaisotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-poland" />;
}
