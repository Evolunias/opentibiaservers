import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-uk');
}

export default function CyntaraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-uk" />;
}
