import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-pvpe-server');
}

export default function Imperianic84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-pvpe-server" />;
}
