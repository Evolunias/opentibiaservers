import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-argentina');
}

export default function LumineraCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-argentina" />;
}
