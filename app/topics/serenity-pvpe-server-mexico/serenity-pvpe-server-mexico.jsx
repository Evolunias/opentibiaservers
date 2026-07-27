import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-mexico');
}

export default function SerenityPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-mexico" />;
}
