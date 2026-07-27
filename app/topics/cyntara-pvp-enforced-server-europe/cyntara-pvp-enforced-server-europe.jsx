import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-europe');
}

export default function CyntaraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-europe" />;
}
