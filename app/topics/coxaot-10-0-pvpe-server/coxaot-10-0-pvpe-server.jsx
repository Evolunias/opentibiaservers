import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-pvpe-server');
}

export default function Coxaot100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-pvpe-server" />;
}
