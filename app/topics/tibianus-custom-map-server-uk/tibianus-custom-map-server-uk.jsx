import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-uk');
}

export default function TibianusCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-uk" />;
}
