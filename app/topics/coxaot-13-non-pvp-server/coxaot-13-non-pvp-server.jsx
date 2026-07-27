import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-non-pvp-server');
}

export default function Coxaot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-non-pvp-server" />;
}
