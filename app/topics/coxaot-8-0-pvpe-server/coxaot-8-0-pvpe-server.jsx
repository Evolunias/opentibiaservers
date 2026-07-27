import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-pvpe-server');
}

export default function Coxaot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-pvpe-server" />;
}
