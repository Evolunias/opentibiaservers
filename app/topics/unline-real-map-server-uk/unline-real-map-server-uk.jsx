import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-uk');
}

export default function UnlineRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-uk" />;
}
