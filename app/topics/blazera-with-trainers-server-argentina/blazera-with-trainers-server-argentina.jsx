import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-argentina');
}

export default function BlazeraWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-argentina" />;
}
