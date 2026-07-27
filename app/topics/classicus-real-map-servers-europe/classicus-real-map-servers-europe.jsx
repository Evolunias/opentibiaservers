import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-europe');
}

export default function ClassicusRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-europe" />;
}
