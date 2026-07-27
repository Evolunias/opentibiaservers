import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-south-america');
}

export default function CyntaraPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-south-america" />;
}
