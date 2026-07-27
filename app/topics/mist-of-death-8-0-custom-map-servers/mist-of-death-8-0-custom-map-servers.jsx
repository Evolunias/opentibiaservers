import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-0-custom-map-servers');
}

export default function MistOfDeath80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-0-custom-map-servers" />;
}
