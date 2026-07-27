import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-poland');
}

export default function BlazeraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-poland" />;
}
