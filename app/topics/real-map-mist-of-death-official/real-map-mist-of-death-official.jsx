import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-official');
}

export default function RealMapMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-official" />;
}
