import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-europe');
}

export default function TibianusCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-europe" />;
}
