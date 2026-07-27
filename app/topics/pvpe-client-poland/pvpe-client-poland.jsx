import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-poland');
}

export default function PvpeClientPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-poland" />;
}
