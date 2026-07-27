import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-open-tibia-server-sweden');
}

export default function NonPvpOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-open-tibia-server-sweden" />;
}
