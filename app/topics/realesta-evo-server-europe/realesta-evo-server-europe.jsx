import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-europe');
}

export default function RealestaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-europe" />;
}
