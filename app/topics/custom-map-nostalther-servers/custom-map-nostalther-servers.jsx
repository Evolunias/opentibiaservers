import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-nostalther-servers');
}

export default function CustomMapNostaltherServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-nostalther-servers" />;
}
