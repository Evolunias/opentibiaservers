import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-france');
}

export default function ImperianicPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-france" />;
}
