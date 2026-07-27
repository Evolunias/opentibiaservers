import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-argentina');
}

export default function CyntaraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-argentina" />;
}
