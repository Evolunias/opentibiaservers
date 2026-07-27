import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-unline-server');
}

export default function PvpeUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-unline-server" />;
}
