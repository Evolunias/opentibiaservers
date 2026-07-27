import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-pvpe-server');
}

export default function Coxaot84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-pvpe-server" />;
}
