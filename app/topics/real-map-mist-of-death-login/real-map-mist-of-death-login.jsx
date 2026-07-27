import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-login');
}

export default function RealMapMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-login" />;
}
