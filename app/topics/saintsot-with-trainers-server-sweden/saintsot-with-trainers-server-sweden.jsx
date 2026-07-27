import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-trainers-server-sweden');
}

export default function SaintsotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-trainers-server-sweden" />;
}
