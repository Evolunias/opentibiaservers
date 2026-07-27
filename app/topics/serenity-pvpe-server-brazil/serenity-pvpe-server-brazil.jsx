import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-brazil');
}

export default function SerenityPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-brazil" />;
}
