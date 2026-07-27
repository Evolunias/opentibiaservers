import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-tibia');
}

export default function RealMapNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-tibia" />;
}
