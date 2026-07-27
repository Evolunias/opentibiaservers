import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-pvpe-server');
}

export default function Imperianic80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-pvpe-server" />;
}
