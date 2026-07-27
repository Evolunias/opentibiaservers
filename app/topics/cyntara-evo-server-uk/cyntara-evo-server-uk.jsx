import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-uk');
}

export default function CyntaraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-uk" />;
}
