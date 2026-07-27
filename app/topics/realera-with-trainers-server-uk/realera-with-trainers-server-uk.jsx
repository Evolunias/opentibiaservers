import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-uk');
}

export default function RealeraWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-uk" />;
}
