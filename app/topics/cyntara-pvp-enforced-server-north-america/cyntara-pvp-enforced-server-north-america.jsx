import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-north-america');
}

export default function CyntaraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-north-america" />;
}
