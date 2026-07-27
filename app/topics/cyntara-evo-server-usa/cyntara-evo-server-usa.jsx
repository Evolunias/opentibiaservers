import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-usa');
}

export default function CyntaraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-usa" />;
}
