import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-argentina');
}

export default function PvpeServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-argentina" />;
}
