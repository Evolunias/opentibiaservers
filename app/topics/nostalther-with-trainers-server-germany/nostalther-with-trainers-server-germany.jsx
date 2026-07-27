import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-germany');
}

export default function NostaltherWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-germany" />;
}
