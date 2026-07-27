import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-latin-america');
}

export default function SerenityRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-latin-america" />;
}
