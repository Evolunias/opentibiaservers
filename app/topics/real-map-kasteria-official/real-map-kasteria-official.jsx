import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-official');
}

export default function RealMapKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-official" />;
}
