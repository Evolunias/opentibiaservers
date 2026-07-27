import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-europe');
}

export default function PvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-europe" />;
}
