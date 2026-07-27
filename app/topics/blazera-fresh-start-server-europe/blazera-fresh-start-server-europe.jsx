import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-europe');
}

export default function BlazeraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-europe" />;
}
