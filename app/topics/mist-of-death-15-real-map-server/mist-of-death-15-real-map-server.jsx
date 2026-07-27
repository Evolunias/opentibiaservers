import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-real-map-server');
}

export default function MistOfDeath15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-real-map-server" />;
}
