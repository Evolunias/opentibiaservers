import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-germany');
}

export default function BlazeraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-germany" />;
}
