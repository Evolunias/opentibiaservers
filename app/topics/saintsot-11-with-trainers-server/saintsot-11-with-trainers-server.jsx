import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-with-trainers-server');
}

export default function Saintsot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-with-trainers-server" />;
}
