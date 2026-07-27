import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-usa');
}

export default function MistOfDeathCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-usa" />;
}
