import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-poland');
}

export default function OlderaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-poland" />;
}
