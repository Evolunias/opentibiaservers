import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-custom-map-servers');
}

export default function MistOfDeath71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-custom-map-servers" />;
}
