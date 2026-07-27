import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-mexico');
}

export default function ImperianicPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-mexico" />;
}
