import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-germany');
}

export default function TibiantisPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-germany" />;
}
