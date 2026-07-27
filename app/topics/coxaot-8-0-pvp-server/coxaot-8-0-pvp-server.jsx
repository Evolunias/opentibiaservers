import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-pvp-server');
}

export default function Coxaot80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-pvp-server" />;
}
