import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-pvp-server');
}

export default function Coxaot14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-pvp-server" />;
}
