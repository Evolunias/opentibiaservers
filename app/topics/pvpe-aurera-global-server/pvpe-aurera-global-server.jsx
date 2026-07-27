import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-aurera-global-server');
}

export default function PvpeAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-aurera-global-server" />;
}
