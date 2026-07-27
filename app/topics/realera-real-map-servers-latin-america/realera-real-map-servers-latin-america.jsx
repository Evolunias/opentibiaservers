import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-latin-america');
}

export default function RealeraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-latin-america" />;
}
