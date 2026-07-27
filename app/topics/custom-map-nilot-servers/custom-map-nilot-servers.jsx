import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nilot-servers');
}

export default function CustomMapNilotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nilot-servers" />;
}
