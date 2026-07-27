import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-uk');
}

export default function SerenityPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-uk" />;
}
