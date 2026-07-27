import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-real-map-server');
}

export default function MistOfDeath11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-real-map-server" />;
}
