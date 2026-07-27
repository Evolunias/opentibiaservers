import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-mexico');
}

export default function MistOfDeathCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-mexico" />;
}
