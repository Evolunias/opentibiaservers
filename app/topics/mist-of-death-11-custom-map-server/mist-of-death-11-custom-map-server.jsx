import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-custom-map-server');
}

export default function MistOfDeath11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-custom-map-server" />;
}
