import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-servers');
}

export default function RealMapMistOfDeathServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-servers" />;
}
