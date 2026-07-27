import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-mexico');
}

export default function CyntaraPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-mexico" />;
}
