import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-canada');
}

export default function ImperianicPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-canada" />;
}
