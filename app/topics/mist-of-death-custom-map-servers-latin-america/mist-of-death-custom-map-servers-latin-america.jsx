import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-latin-america');
}

export default function MistOfDeathCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-latin-america" />;
}
