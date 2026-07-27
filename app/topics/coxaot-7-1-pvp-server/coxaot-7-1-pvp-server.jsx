import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-pvp-server');
}

export default function Coxaot71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-pvp-server" />;
}
