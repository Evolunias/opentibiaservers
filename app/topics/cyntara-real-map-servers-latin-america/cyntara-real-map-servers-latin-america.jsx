import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-latin-america');
}

export default function CyntaraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-latin-america" />;
}
