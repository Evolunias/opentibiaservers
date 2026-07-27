import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-pvp-server');
}

export default function Coxaot12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-pvp-server" />;
}
