import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-north-america');
}

export default function SaintsotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-north-america" />;
}
