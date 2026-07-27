import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-germany');
}

export default function CyntaraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-germany" />;
}
