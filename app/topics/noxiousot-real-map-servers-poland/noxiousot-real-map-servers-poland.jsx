import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-poland');
}

export default function NoxiousotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-poland" />;
}
