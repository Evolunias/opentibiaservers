import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-midhem-server');
}

export default function CustomMapMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-midhem-server" />;
}
