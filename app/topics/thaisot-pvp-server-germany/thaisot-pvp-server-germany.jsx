import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-germany');
}

export default function ThaisotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-germany" />;
}
