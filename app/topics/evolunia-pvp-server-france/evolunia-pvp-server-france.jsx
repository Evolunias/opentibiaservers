import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-france');
}

export default function EvoluniaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-france" />;
}
