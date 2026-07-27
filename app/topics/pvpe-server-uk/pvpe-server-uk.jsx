import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-uk');
}

export default function PvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-uk" />;
}
