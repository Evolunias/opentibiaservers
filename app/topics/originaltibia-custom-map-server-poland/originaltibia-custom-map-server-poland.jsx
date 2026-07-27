import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-poland');
}

export default function OriginaltibiaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-poland" />;
}
