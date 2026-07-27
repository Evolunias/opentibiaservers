import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-active');
}

export default function PvpeServerActiveKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-active" />;
}
