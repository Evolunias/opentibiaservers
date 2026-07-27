import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server');
}

export default function PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server" />;
}
