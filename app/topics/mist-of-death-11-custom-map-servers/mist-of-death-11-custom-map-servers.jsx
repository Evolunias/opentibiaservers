import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-custom-map-servers');
}

export default function MistOfDeath11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-custom-map-servers" />;
}
