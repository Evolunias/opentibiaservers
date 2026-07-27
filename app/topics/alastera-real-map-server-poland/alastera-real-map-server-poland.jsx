import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-poland');
}

export default function AlasteraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-poland" />;
}
