import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-mexico');
}

export default function BlazeraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-mexico" />;
}
