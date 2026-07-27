import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-with-trainers-server-europe');
}

export default function ClassickDrakoriaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-with-trainers-server-europe" />;
}
