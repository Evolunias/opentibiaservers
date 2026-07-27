import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-germany');
}

export default function SerenityPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-germany" />;
}
