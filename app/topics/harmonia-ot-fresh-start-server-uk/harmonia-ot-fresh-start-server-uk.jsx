import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-uk');
}

export default function HarmoniaOtFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-uk" />;
}
