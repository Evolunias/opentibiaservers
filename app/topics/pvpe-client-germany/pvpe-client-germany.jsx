import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-germany');
}

export default function PvpeClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-germany" />;
}
