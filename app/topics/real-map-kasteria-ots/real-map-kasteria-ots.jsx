import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-ots');
}

export default function RealMapKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-ots" />;
}
