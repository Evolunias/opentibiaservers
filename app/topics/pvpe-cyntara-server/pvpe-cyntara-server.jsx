import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-cyntara-server');
}

export default function PvpeCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-cyntara-server" />;
}
