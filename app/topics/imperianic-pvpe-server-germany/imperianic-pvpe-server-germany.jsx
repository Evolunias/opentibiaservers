import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-germany');
}

export default function ImperianicPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-germany" />;
}
