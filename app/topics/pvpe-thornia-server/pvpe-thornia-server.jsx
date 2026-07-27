import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-thornia-server');
}

export default function PvpeThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-thornia-server" />;
}
