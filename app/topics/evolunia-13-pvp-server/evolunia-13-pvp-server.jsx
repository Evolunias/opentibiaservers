import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-pvp-server');
}

export default function Evolunia13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-pvp-server" />;
}
