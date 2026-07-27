import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-pvpe-server');
}

export default function Coxaot96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-pvpe-server" />;
}
