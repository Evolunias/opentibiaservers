import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-realesta-server');
}

export default function PvpeRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-realesta-server" />;
}
