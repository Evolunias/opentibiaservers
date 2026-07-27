import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-non-pvp-server-south-america');
}

export default function EvoluniaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-non-pvp-server-south-america" />;
}
