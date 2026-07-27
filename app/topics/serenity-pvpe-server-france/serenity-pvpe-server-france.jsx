import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-france');
}

export default function SerenityPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-france" />;
}
