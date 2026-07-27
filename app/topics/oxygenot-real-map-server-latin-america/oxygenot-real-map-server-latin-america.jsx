import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-latin-america');
}

export default function OxygenotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-latin-america" />;
}
