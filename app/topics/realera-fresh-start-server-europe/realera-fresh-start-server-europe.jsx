import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-europe');
}

export default function RealeraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-europe" />;
}
