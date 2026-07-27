import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-mexico');
}

export default function BlazeraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-mexico" />;
}
