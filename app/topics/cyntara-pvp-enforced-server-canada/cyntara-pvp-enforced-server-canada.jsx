import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-canada');
}

export default function CyntaraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-canada" />;
}
