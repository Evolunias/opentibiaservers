import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-poland');
}

export default function CustomMapServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-poland" />;
}
