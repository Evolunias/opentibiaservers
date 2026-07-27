import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-sweden');
}

export default function NostaltherPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-sweden" />;
}
