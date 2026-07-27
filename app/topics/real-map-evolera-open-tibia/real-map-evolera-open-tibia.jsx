import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-open-tibia');
}

export default function RealMapEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-open-tibia" />;
}
