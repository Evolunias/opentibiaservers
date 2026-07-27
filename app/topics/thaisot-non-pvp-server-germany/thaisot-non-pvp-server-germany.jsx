import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-germany');
}

export default function ThaisotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-germany" />;
}
