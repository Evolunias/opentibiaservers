import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-mexico');
}

export default function PvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-mexico" />;
}
