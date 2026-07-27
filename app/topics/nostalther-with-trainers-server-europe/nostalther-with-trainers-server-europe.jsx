import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-europe');
}

export default function NostaltherWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-europe" />;
}
