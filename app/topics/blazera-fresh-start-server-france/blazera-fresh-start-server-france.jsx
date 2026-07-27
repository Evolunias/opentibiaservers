import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-france');
}

export default function BlazeraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-france" />;
}
