import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-usa');
}

export default function PvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-usa" />;
}
