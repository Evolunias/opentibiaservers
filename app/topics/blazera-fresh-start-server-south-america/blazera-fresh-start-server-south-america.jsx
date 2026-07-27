import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-south-america');
}

export default function BlazeraFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-south-america" />;
}
