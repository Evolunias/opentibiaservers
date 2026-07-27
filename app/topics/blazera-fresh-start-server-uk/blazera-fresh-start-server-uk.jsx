import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-uk');
}

export default function BlazeraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-uk" />;
}
