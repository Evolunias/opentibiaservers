import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-custom-map-server');
}

export default function MistOfDeath1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-custom-map-server" />;
}
