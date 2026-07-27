import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-pvp-server');
}

export default function Evolunia12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-pvp-server" />;
}
