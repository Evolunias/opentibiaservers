import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-classicus-server');
}

export default function CustomMapClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-classicus-server" />;
}
