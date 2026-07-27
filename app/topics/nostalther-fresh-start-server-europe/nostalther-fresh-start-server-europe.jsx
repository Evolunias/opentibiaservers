import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-europe');
}

export default function NostaltherFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-europe" />;
}
