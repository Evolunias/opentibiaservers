import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-custom-map-server');
}

export default function MistOfDeath71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-custom-map-server" />;
}
