import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-54-pvp-server');
}

export default function Coxaot854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-54-pvp-server" />;
}
