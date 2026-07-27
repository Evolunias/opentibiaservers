import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-brazil');
}

export default function LumineraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-brazil" />;
}
