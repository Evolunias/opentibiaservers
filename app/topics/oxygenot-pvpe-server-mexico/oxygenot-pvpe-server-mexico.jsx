import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-mexico');
}

export default function OxygenotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-mexico" />;
}
