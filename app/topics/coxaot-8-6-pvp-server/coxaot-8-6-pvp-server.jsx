import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-pvp-server');
}

export default function Coxaot86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-pvp-server" />;
}
