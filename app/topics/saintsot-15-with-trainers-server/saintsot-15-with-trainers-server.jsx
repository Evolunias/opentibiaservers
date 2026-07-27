import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-with-trainers-server');
}

export default function Saintsot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-with-trainers-server" />;
}
