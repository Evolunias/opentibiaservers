import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-72-non-pvp-server');
}

export default function Coxaot772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-72-non-pvp-server" />;
}
