import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-pvp-server');
}

export default function Evolunia11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-pvp-server" />;
}
