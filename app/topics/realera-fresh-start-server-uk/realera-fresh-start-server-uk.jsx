import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-uk');
}

export default function RealeraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-uk" />;
}
