import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-latin-america');
}

export default function MistOfDeathCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-latin-america" />;
}
