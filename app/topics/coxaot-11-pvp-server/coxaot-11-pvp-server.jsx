import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-pvp-server');
}

export default function Coxaot11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-pvp-server" />;
}
