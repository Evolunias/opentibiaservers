import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-server-south-america');
}

export default function ThaisotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-server-south-america" />;
}
