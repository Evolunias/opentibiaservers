import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-non-pvp-server');
}

export default function Coxaot84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-non-pvp-server" />;
}
