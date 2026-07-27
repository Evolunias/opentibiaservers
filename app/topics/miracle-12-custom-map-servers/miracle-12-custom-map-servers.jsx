import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-custom-map-servers');
}

export default function Miracle12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-custom-map-servers" />;
}
