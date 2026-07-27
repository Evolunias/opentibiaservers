import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-custom-map-servers');
}

export default function Miracle15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-custom-map-servers" />;
}
