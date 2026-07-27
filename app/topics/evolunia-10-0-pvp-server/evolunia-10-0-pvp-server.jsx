import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-pvp-server');
}

export default function Evolunia100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-pvp-server" />;
}
