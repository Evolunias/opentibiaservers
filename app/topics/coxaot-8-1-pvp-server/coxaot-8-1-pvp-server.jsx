import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-pvp-server');
}

export default function Coxaot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-pvp-server" />;
}
