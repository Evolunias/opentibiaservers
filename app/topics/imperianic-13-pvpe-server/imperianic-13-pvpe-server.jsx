import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-pvpe-server');
}

export default function Imperianic13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-pvpe-server" />;
}
