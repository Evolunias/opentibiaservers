import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-mexico');
}

export default function SaintsotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-mexico" />;
}
