import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-brazil');
}

export default function CyntaraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-brazil" />;
}
