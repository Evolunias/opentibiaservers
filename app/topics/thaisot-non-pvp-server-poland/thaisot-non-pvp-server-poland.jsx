import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-poland');
}

export default function ThaisotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-poland" />;
}
