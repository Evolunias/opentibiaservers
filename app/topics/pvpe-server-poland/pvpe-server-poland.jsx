import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-poland');
}

export default function PvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-poland" />;
}
