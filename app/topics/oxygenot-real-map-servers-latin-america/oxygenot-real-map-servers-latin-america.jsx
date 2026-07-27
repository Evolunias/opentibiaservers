import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-latin-america');
}

export default function OxygenotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-latin-america" />;
}
