import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-brazil');
}

export default function ImperianicPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-brazil" />;
}
