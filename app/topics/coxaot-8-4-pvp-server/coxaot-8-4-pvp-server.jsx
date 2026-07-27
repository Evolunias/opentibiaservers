import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-pvp-server');
}

export default function Coxaot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-pvp-server" />;
}
