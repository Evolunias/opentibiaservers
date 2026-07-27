import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-pvpe-server');
}

export default function Coxaot86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-pvpe-server" />;
}
