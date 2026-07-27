import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-real-map-server');
}

export default function MistOfDeath14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-real-map-server" />;
}
