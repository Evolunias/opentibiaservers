import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-latin-america');
}

export default function UnlineRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-latin-america" />;
}
