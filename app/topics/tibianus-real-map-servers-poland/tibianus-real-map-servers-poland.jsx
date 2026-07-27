import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-poland');
}

export default function TibianusRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-poland" />;
}
