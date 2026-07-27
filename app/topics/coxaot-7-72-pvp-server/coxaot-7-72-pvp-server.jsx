import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-pvp-server');
}

export default function Coxaot772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-pvp-server" />;
}
