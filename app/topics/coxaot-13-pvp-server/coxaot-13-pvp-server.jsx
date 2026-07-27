import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-pvp-server');
}

export default function Coxaot13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-pvp-server" />;
}
