import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-pvp-server-sweden');
}

export default function SerenityPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-pvp-server-sweden" />;
}
