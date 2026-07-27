import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-uk');
}

export default function PvpeServersUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-uk" />;
}
