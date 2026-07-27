import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-uk');
}

export default function ImperianicPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-uk" />;
}
