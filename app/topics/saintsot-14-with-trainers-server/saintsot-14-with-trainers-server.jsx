import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-with-trainers-server');
}

export default function Saintsot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-with-trainers-server" />;
}
