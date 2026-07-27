import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-uk');
}

export default function OlderaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-uk" />;
}
