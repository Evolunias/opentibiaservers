import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-brazil');
}

export default function BlazeraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-brazil" />;
}
