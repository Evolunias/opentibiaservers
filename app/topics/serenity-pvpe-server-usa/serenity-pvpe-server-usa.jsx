import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-usa');
}

export default function SerenityPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-usa" />;
}
