import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-canada');
}

export default function SerenityPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-canada" />;
}
