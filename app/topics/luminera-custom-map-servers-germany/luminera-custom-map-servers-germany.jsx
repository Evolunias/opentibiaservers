import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-germany');
}

export default function LumineraCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-germany" />;
}
