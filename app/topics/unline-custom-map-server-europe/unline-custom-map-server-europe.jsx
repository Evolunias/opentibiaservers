import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-europe');
}

export default function UnlineCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-europe" />;
}
