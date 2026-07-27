import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-germany');
}

export default function SaintsotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-germany" />;
}
