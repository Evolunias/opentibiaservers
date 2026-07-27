import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-north-america');
}

export default function EvoluniaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-north-america" />;
}
