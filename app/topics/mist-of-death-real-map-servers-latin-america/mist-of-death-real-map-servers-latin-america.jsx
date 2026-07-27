import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-latin-america');
}

export default function MistOfDeathRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-latin-america" />;
}
