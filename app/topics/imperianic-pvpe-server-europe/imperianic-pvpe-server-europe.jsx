import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-europe');
}

export default function ImperianicPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-europe" />;
}
