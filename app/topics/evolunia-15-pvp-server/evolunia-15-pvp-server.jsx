import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-pvp-server');
}

export default function Evolunia15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-pvp-server" />;
}
