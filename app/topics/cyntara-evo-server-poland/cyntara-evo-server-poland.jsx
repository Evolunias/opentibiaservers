import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-poland');
}

export default function CyntaraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-poland" />;
}
