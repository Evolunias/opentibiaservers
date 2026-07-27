import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-pvpe-server');
}

export default function Coxaot11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-pvpe-server" />;
}
