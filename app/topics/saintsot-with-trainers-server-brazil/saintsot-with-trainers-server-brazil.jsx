import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-brazil');
}

export default function SaintsotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-brazil" />;
}
