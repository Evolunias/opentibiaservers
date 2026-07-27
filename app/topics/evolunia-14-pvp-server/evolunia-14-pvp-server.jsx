import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-pvp-server');
}

export default function Evolunia14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-pvp-server" />;
}
