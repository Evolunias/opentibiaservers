import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-pvp-server');
}

export default function Evolunia74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-pvp-server" />;
}
