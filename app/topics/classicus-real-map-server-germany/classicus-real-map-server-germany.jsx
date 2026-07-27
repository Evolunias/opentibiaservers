import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-germany');
}

export default function ClassicusRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-germany" />;
}
