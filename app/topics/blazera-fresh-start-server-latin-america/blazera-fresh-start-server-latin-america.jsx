import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-latin-america');
}

export default function BlazeraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-latin-america" />;
}
