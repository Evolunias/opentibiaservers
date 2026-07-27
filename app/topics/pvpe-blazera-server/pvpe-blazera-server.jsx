import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-blazera-server');
}

export default function PvpeBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-blazera-server" />;
}
