import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-argentina');
}

export default function CyntaraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-argentina" />;
}
