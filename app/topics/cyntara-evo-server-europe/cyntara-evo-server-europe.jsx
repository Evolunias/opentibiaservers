import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-europe');
}

export default function CyntaraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-europe" />;
}
