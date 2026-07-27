import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-south-america');
}

export default function SerenityPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-south-america" />;
}
