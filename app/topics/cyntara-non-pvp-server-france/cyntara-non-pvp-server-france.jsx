import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-france');
}

export default function CyntaraNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-france" />;
}
