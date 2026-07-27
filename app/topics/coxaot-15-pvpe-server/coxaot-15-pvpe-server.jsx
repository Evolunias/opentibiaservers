import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-pvpe-server');
}

export default function Coxaot15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-pvpe-server" />;
}
