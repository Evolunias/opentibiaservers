import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-latin-america');
}

export default function RealeraRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-latin-america" />;
}
