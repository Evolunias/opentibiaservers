import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-pvp-server');
}

export default function Evolunia84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-pvp-server" />;
}
