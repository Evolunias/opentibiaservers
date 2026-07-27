import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-pvpe-server');
}

export default function Kasteria80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-pvpe-server" />;
}
