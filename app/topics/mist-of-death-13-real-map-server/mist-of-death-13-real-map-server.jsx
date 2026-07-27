import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-real-map-server');
}

export default function MistOfDeath13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-real-map-server" />;
}
