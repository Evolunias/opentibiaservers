import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-uk');
}

export default function TibiantisPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-uk" />;
}
