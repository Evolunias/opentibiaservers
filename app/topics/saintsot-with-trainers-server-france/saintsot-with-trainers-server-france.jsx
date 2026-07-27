import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-france');
}

export default function SaintsotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-france" />;
}
