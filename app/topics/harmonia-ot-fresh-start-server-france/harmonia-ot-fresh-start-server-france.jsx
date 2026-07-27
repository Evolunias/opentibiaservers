import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-france');
}

export default function HarmoniaOtFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-france" />;
}
