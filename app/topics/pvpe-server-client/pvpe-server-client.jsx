import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-client');
}

export default function PvpeServerClientKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-client" />;
}
