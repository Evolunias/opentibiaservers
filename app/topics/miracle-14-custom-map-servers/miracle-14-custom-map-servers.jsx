import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-custom-map-servers');
}

export default function Miracle14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-custom-map-servers" />;
}
