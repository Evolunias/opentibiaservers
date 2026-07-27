import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-mexico');
}

export default function RealeraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-mexico" />;
}
