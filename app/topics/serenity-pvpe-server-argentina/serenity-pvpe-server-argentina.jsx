import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-argentina');
}

export default function SerenityPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-argentina" />;
}
