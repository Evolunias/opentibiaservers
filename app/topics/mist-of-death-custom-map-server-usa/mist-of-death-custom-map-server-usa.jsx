import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-usa');
}

export default function MistOfDeathCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-usa" />;
}
