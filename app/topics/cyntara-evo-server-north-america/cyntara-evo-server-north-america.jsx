import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-north-america');
}

export default function CyntaraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-north-america" />;
}
