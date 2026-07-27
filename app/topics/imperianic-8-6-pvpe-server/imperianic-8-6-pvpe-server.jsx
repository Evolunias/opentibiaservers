import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-pvpe-server');
}

export default function Imperianic86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-pvpe-server" />;
}
