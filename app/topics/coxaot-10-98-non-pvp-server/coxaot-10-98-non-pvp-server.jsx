import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-non-pvp-server');
}

export default function Coxaot1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-non-pvp-server" />;
}
