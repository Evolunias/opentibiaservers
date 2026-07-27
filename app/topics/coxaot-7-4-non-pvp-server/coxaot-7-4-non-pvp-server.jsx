import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-non-pvp-server');
}

export default function Coxaot74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-non-pvp-server" />;
}
