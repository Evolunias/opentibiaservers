import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-custom-map-servers');
}

export default function MistOfDeath15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-custom-map-servers" />;
}
