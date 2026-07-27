import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-classicus-server');
}

export default function PvpeClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-classicus-server" />;
}
