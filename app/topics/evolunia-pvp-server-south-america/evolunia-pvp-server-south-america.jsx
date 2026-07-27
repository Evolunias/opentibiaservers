import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-south-america');
}

export default function EvoluniaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-south-america" />;
}
