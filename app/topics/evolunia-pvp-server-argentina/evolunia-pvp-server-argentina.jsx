import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-pvp-server-argentina');
}

export default function EvoluniaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-pvp-server-argentina" />;
}
