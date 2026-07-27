import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-ot');
}

export default function RealMapKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-ot" />;
}
