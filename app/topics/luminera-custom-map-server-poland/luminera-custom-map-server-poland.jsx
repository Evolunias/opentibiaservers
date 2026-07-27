import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-poland');
}

export default function LumineraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-poland" />;
}
