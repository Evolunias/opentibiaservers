import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-pvpe-server');
}

export default function Imperianic100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-pvpe-server" />;
}
