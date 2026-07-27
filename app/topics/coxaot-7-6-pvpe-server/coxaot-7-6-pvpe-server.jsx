import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-pvpe-server');
}

export default function Coxaot76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-pvpe-server" />;
}
