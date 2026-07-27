import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-europe');
}

export default function ClassicusWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-europe" />;
}
