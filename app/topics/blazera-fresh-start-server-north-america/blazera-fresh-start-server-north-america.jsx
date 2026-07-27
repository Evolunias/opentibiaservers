import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-north-america');
}

export default function BlazeraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-north-america" />;
}
