import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-argentina');
}

export default function ImperianicPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-argentina" />;
}
