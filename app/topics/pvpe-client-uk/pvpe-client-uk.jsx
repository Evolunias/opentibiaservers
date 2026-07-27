import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-uk');
}

export default function PvpeClientUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-uk" />;
}
