import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nostalther-server');
}

export default function CustomMapNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nostalther-server" />;
}
