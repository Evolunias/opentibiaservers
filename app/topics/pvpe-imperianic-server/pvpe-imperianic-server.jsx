import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-imperianic-server');
}

export default function PvpeImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-imperianic-server" />;
}
