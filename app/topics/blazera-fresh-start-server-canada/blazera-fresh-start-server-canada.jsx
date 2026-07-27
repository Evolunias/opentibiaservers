import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-canada');
}

export default function BlazeraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-canada" />;
}
