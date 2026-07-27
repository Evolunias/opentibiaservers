import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-europe-servers');
}

export default function HarmoniaOtEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-europe-servers" />;
}
