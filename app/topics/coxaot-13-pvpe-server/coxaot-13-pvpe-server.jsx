import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-pvpe-server');
}

export default function Coxaot13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-pvpe-server" />;
}
