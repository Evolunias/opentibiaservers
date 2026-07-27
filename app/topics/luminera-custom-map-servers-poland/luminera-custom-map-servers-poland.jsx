import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-poland');
}

export default function LumineraCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-poland" />;
}
