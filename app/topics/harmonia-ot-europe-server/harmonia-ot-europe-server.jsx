import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-europe-server');
}

export default function HarmoniaOtEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-europe-server" />;
}
