import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-poland');
}

export default function PvpeOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-poland" />;
}
