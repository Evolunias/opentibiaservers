import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-brazil');
}

export default function HarmoniaOtWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-brazil" />;
}
