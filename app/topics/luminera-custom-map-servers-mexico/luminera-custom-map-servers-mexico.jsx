import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-mexico');
}

export default function LumineraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-mexico" />;
}
