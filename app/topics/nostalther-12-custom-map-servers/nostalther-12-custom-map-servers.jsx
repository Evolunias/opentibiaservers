import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-custom-map-servers');
}

export default function Nostalther12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-custom-map-servers" />;
}
