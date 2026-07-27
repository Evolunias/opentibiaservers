import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-argentina');
}

export default function LumineraCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-argentina" />;
}
