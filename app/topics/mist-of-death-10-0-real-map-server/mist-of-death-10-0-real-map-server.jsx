import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-real-map-server');
}

export default function MistOfDeath100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-real-map-server" />;
}
