import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot');
}

export default function RealMapCarlinotKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot" />;
}
