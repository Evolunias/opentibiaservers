import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-fresh-start-server-europe');
}

export default function HarmoniaOtFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-fresh-start-server-europe" />;
}
