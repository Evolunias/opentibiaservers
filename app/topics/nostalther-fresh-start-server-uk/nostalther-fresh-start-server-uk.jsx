import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-uk');
}

export default function NostaltherFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-uk" />;
}
