import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-usa');
}

export default function CyntaraPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-usa" />;
}
