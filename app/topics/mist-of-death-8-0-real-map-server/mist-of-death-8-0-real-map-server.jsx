import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-0-real-map-server');
}

export default function MistOfDeath80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-0-real-map-server" />;
}
