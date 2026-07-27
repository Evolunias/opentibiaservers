import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-poland');
}

export default function ImperianicPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-poland" />;
}
