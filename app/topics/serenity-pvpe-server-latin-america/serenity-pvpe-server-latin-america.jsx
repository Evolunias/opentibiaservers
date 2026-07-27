import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-latin-america');
}

export default function SerenityPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-latin-america" />;
}
