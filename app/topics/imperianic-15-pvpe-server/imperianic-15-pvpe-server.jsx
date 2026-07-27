import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-pvpe-server');
}

export default function Imperianic15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-pvpe-server" />;
}
