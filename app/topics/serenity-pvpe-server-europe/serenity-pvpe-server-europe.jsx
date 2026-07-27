import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-europe');
}

export default function SerenityPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-europe" />;
}
