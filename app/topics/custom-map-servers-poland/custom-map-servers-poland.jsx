import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-poland');
}

export default function CustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-poland" />;
}
