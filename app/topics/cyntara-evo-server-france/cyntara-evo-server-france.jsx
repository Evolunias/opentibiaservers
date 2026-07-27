import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-france');
}

export default function CyntaraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-france" />;
}
