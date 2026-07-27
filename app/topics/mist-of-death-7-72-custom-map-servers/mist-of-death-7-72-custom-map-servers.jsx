import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-72-custom-map-servers');
}

export default function MistOfDeath772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-72-custom-map-servers" />;
}
