import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-europe');
}

export default function OlderaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-europe" />;
}
