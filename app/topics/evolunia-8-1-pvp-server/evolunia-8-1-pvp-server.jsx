import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-pvp-server');
}

export default function Evolunia81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-pvp-server" />;
}
