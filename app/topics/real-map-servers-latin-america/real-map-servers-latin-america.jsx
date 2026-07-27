import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-latin-america');
}

export default function RealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-latin-america" />;
}
