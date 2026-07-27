import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-coxaot-server');
}

export default function PvpeCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-coxaot-server" />;
}
