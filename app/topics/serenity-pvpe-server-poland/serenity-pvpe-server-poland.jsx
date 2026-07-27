import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-poland');
}

export default function SerenityPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-poland" />;
}
