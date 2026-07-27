import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-france');
}

export default function NtoStarPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-france" />;
}
