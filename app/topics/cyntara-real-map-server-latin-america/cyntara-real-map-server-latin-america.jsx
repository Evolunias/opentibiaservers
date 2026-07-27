import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-latin-america');
}

export default function CyntaraRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-latin-america" />;
}
