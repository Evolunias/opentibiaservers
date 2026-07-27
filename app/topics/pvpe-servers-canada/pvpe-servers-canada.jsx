import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-canada');
}

export default function PvpeServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-canada" />;
}
