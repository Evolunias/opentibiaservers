import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-sweden');
}

export default function CyntaraPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-sweden" />;
}
