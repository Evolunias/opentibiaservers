import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-europe');
}

export default function TibiantisPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-europe" />;
}
