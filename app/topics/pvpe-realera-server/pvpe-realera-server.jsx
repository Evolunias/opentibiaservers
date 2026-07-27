import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-realera-server');
}

export default function PvpeRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-realera-server" />;
}
