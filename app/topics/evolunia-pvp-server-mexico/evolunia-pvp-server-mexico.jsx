import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-mexico');
}

export default function EvoluniaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-mexico" />;
}
