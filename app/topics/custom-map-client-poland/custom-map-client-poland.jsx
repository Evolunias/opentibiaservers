import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-poland');
}

export default function CustomMapClientPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-poland" />;
}
