import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-thornia-server');
}

export default function CustomMapThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-thornia-server" />;
}
