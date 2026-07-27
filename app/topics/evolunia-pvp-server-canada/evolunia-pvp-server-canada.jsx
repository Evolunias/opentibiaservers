import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-canada');
}

export default function EvoluniaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-canada" />;
}
