import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-europe');
}

export default function RealestaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-europe" />;
}
