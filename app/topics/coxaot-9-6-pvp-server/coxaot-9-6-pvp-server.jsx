import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-pvp-server');
}

export default function Coxaot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-pvp-server" />;
}
