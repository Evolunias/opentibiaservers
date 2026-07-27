import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvp-enforced-server-sweden');
}

export default function SabrehavenPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvp-enforced-server-sweden" />;
}
