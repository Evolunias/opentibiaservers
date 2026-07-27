import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-poland');
}

export default function OriginaltibiaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-poland" />;
}
