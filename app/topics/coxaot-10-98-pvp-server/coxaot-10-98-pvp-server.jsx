import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-pvp-server');
}

export default function Coxaot1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-pvp-server" />;
}
