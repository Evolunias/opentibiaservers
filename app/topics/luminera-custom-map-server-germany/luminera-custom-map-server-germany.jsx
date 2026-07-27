import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-germany');
}

export default function LumineraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-germany" />;
}
