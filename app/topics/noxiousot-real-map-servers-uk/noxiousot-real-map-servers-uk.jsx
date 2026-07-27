import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-uk');
}

export default function NoxiousotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-uk" />;
}
