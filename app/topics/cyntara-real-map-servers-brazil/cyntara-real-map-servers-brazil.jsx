import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-brazil');
}

export default function CyntaraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-brazil" />;
}
