import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-brazil');
}

export default function CyntaraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-brazil" />;
}
