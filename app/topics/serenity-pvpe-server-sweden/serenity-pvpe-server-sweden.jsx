import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvpe-server-sweden');
}

export default function SerenityPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvpe-server-sweden" />;
}
