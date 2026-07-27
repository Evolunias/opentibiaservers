import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-north-america');
}

export default function BlazeraWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-north-america" />;
}
