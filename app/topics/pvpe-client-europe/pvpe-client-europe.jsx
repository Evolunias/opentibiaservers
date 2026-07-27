import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-europe');
}

export default function PvpeClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-europe" />;
}
