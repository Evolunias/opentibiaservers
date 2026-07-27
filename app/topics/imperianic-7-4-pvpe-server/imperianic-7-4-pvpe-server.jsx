import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-pvpe-server');
}

export default function Imperianic74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-pvpe-server" />;
}
