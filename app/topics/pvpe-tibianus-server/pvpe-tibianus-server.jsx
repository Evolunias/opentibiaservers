import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibianus-server');
}

export default function PvpeTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibianus-server" />;
}
