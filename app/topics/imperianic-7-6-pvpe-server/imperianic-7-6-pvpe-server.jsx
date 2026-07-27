import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-pvpe-server');
}

export default function Imperianic76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-pvpe-server" />;
}
