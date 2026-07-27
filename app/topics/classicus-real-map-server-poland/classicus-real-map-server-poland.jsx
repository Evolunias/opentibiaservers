import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-poland');
}

export default function ClassicusRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-poland" />;
}
