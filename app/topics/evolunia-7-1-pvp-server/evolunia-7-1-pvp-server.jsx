import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-pvp-server');
}

export default function Evolunia71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-pvp-server" />;
}
