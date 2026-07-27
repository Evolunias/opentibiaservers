import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-mexico');
}

export default function MistOfDeathCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-mexico" />;
}
