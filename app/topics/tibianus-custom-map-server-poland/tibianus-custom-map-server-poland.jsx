import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-poland');
}

export default function TibianusCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-poland" />;
}
