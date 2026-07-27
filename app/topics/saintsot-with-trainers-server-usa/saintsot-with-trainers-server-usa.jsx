import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-usa');
}

export default function SaintsotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-usa" />;
}
