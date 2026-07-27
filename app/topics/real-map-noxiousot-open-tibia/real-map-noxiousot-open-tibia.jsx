import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-open-tibia');
}

export default function RealMapNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-open-tibia" />;
}
