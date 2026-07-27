import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-north-america');
}

export default function SerenityPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-north-america" />;
}
