import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-enforced-server-latin-america');
}

export default function CyntaraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-enforced-server-latin-america" />;
}
