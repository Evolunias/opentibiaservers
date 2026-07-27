import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-europe');
}

export default function PvpeServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-europe" />;
}
