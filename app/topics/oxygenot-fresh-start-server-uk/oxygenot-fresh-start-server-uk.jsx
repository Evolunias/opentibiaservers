import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-uk');
}

export default function OxygenotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-uk" />;
}
