import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-latin-america');
}

export default function ImperianicPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-latin-america" />;
}
