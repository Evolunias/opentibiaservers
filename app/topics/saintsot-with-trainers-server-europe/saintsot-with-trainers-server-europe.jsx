import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-europe');
}

export default function SaintsotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-europe" />;
}
