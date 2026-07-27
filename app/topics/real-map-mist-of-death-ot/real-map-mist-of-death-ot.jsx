import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-ot');
}

export default function RealMapMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-ot" />;
}
