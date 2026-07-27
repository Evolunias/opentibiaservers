import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-map');
}

export default function CyntaraMapKeywordPage() {
  return <StaticKeywordPage slug="cyntara-map" />;
}
