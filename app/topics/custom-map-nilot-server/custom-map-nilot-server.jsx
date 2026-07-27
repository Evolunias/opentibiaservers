import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nilot-server');
}

export default function CustomMapNilotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nilot-server" />;
}
