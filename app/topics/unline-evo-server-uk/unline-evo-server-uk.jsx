import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-uk');
}

export default function UnlineEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-uk" />;
}
