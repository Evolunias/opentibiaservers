import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-poland');
}

export default function SaintsotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-poland" />;
}
