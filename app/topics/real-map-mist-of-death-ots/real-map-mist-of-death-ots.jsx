import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-ots');
}

export default function RealMapMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-ots" />;
}
