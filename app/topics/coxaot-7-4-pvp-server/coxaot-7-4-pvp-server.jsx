import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-pvp-server');
}

export default function Coxaot74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-pvp-server" />;
}
