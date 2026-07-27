import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-canada');
}

export default function CyntaraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-canada" />;
}
