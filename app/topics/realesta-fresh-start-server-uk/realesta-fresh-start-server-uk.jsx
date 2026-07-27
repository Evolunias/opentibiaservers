import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-uk');
}

export default function RealestaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-uk" />;
}
