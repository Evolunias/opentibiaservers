import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-europe');
}

export default function ClassicusEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-europe" />;
}
