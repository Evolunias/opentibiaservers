import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-pvpe-server');
}

export default function Coxaot71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-pvpe-server" />;
}
