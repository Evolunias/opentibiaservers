import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-98-pvp-server');
}

export default function Evolunia1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-98-pvp-server" />;
}
