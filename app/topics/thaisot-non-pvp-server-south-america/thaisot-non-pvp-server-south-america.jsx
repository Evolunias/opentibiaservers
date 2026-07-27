import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-non-pvp-server-south-america');
}

export default function ThaisotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-non-pvp-server-south-america" />;
}
