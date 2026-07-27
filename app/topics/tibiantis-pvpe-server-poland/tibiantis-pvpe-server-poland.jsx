import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-poland');
}

export default function TibiantisPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-poland" />;
}
