import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-france');
}

export default function CanobRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-france" />;
}
