import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-pvpe-server');
}

export default function Imperianic96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-pvpe-server" />;
}
