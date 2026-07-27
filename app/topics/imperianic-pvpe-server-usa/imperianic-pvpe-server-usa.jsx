import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-usa');
}

export default function ImperianicPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-usa" />;
}
