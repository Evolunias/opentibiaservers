import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-france');
}

export default function CyntaraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-france" />;
}
