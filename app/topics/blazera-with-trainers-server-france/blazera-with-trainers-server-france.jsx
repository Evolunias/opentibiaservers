import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-france');
}

export default function BlazeraWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-france" />;
}
