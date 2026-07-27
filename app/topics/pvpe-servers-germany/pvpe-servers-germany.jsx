import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-germany');
}

export default function PvpeServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-germany" />;
}
