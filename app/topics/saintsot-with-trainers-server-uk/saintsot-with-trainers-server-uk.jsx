import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-uk');
}

export default function SaintsotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-uk" />;
}
