import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-mexico');
}

export default function RealestaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-mexico" />;
}
