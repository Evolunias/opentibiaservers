import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-1-custom-map-servers');
}

export default function MistOfDeath81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-1-custom-map-servers" />;
}
