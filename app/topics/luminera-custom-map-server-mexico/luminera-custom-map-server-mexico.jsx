import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-mexico');
}

export default function LumineraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-mexico" />;
}
