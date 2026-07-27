import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-custom-map-servers');
}

export default function Miracle11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-custom-map-servers" />;
}
