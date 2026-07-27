import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-pvpe-server');
}

export default function Oxygenot80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-pvpe-server" />;
}
