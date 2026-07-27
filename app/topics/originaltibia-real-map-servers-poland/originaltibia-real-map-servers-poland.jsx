import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-poland');
}

export default function OriginaltibiaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-poland" />;
}
