import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-europe');
}

export default function OxygenotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-europe" />;
}
