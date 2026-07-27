import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-north-america');
}

export default function ImperianicPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-north-america" />;
}
