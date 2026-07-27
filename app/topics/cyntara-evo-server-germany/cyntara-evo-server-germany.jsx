import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-germany');
}

export default function CyntaraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-germany" />;
}
