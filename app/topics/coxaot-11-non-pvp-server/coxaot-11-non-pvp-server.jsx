import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-non-pvp-server');
}

export default function Coxaot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-non-pvp-server" />;
}
