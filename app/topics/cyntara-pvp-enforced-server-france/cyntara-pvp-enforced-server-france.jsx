import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-france');
}

export default function CyntaraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-france" />;
}
