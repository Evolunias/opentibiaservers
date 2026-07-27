import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-custom-map-servers');
}

export default function MistOfDeath100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-custom-map-servers" />;
}
