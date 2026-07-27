import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-france');
}

export default function CanobRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-france" />;
}
