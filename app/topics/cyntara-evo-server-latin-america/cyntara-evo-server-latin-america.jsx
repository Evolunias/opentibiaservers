import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-latin-america');
}

export default function CyntaraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-latin-america" />;
}
