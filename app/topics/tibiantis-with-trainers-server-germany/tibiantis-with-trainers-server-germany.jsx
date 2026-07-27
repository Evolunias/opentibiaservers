import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-germany');
}

export default function TibiantisWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-germany" />;
}
