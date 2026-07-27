import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-pvp-server');
}

export default function Evolunia96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-pvp-server" />;
}
