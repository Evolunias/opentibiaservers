import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-europe');
}

export default function ClassicusRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-europe" />;
}
