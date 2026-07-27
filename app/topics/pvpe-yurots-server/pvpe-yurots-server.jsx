import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-yurots-server');
}

export default function PvpeYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-yurots-server" />;
}
