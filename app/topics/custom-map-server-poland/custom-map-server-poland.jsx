import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-poland');
}

export default function CustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-poland" />;
}
