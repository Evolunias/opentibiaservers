import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-status');
}

export default function HarmoniaOtStatusKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-status" />;
}
