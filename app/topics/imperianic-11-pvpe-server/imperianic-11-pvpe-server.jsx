import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-pvpe-server');
}

export default function Imperianic11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-pvpe-server" />;
}
